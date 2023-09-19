import { Zstack } from "@/types";
export function formatStorageNumberToObj(
  size: number,
  decimal: number = 0,
): Zstack.IStorage {
  const sizes: Zstack.UnitType[] = ["B", "KB", "MB", "GB", "TB"];
  const scale = Math.floor(Math.log(size) / Math.log(1024));
  const bytes = (size / Math.pow(1024, scale)).toFixed(decimal);
  const unitIndex = Math.min(scale, sizes.length - 1);
  return {
    number: decimal !== 0 ? parseFloat(bytes) : parseInt(bytes),
    unit: sizes[unitIndex],
  };
}
