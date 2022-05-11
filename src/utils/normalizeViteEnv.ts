
const normalizeViteEnv = () => {
  const env = import.meta.env

  Object.entries(env).forEach(([key, value]) => {
    if (key.startsWith('VITE_')) {
      const newKey = key.replace('VITE_', '')
      env[newKey] = value
    }
  })
}

export default normalizeViteEnv
