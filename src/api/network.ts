export class ModuMozuError {}

export interface ApiResponse<T> {
  data: T;
  timestamp: number;
}
