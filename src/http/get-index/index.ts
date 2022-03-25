export async function handler (req: object) {
  return { ...Deno.version }
}
