import { useState, useEffect, useCallback } from "react";

export interface StepProgress {
  roadmapId: string;
  phaseIndex: number;
  stepIndex: number;
  completedAt: string;
}

export interface RoadmapProgress {
  roadmapId: string;
  completedSteps: StepProgress[];
  startedAt: string;
  lastActivityAt: string;
}

const STORAGE_KEY = "edify-progress";

export function useProgress() {
  const [progress, setProgress] = useState<RoadmapProgress[]>([]);

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        setProgress(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse progress:", e);
      }
    }
  }, []);

  // Save to localStorage whenever progress changes
  const saveProgress = useCallback((newProgress: RoadmapProgress[]) => {
    setProgress(newProgress);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newProgress));
  }, []);

  const toggleStepComplete = useCallback((
    roadmapId: string,
    phaseIndex: number,
    stepIndex: number
  ) => {
    setProgress(prev => {
      const now = new Date().toISOString();
      let roadmapProgress = prev.find(p => p.roadmapId === roadmapId);

      if (!roadmapProgress) {
        roadmapProgress = {
          roadmapId,
          completedSteps: [],
          startedAt: now,
          lastActivityAt: now
        };
      }

      const existingIndex = roadmapProgress.completedSteps.findIndex(
        s => s.phaseIndex === phaseIndex && s.stepIndex === stepIndex
      );

      let newCompletedSteps: StepProgress[];
      if (existingIndex >= 0) {
        // Remove if already completed (toggle off)
        newCompletedSteps = roadmapProgress.completedSteps.filter(
          (_, i) => i !== existingIndex
        );
      } else {
        // Add new completed step
        newCompletedSteps = [
          ...roadmapProgress.completedSteps,
          { roadmapId, phaseIndex, stepIndex, completedAt: now }
        ];
      }

      const updatedRoadmapProgress = {
        ...roadmapProgress,
        completedSteps: newCompletedSteps,
        lastActivityAt: now
      };

      const newProgress = prev.filter(p => p.roadmapId !== roadmapId);
      newProgress.push(updatedRoadmapProgress);

      localStorage.setItem(STORAGE_KEY, JSON.stringify(newProgress));
      return newProgress;
    });
  }, []);

  const isStepComplete = useCallback((
    roadmapId: string,
    phaseIndex: number,
    stepIndex: number
  ): boolean => {
    const roadmapProgress = progress.find(p => p.roadmapId === roadmapId);
    if (!roadmapProgress) return false;
    return roadmapProgress.completedSteps.some(
      s => s.phaseIndex === phaseIndex && s.stepIndex === stepIndex
    );
  }, [progress]);

  const getRoadmapProgress = useCallback((roadmapId: string): RoadmapProgress | undefined => {
    return progress.find(p => p.roadmapId === roadmapId);
  }, [progress]);

  const getCompletionPercentage = useCallback((
    roadmapId: string,
    totalSteps: number
  ): number => {
    const roadmapProgress = progress.find(p => p.roadmapId === roadmapId);
    if (!roadmapProgress || totalSteps === 0) return 0;
    return Math.round((roadmapProgress.completedSteps.length / totalSteps) * 100);
  }, [progress]);

  const getPhaseCompletionPercentage = useCallback((
    roadmapId: string,
    phaseIndex: number,
    phaseStepCount: number
  ): number => {
    const roadmapProgress = progress.find(p => p.roadmapId === roadmapId);
    if (!roadmapProgress || phaseStepCount === 0) return 0;
    const completedInPhase = roadmapProgress.completedSteps.filter(
      s => s.phaseIndex === phaseIndex
    ).length;
    return Math.round((completedInPhase / phaseStepCount) * 100);
  }, [progress]);

  const resetRoadmapProgress = useCallback((roadmapId: string) => {
    setProgress(prev => {
      const newProgress = prev.filter(p => p.roadmapId !== roadmapId);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newProgress));
      return newProgress;
    });
  }, []);

  return {
    progress,
    toggleStepComplete,
    isStepComplete,
    getRoadmapProgress,
    getCompletionPercentage,
    getPhaseCompletionPercentage,
    resetRoadmapProgress
  };
}
