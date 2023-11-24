export type CorePersonaMetric = 'Adaptability' | 'Discipline' | 'Sociability' | 'Empathy' | 'Resilience';

export type CorePersonaMetricScores = {
  [K in CorePersonaMetric]: number;
}
