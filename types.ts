
export interface SensorData {
  id: string;
  type: 'flow' | 'rain' | 'moisture' | 'level' | 'temperature' | 'humidity';
  value: number;
  unit: string;
  location: string;
  status: 'normal' | 'warning' | 'critical';
  timestamp: string;
}

export interface DigitalTwinNode {
  id: string;
  name: string;
  type: 'source' | 'treatment' | 'pump' | 'distribution' | 'consumer';
  status: 'operational' | 'maintenance' | 'alert';
  pressure: number; // psi
  flowRate: number; // L/m
  capacity?: number; // %
}

export interface ForecastData {
  date: string;
  predictedUsage: number;
  actualUsage?: number;
  confidenceUpper: number;
  confidenceLower: number;
}

export interface AIAnalysisResult {
  summary: string;
  recommendations: string[];
  riskLevel: 'low' | 'medium' | 'high';
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
  isError?: boolean;
}
