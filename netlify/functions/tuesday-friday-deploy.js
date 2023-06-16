import fetch from 'node-fetch'
import { schedule } from '@netlify/functions'

// This is a sample build hook URL
const BUILD_HOOK = 'https://api.netlify.com/build_hooks/648b903f2842e50453dd0342'

// Schedules the handler function to run at 5pm on Tuesday and Friday
const handler = schedule('0 17 * * 2,5', async () => {
  await fetch(BUILD_HOOK, {
    method: 'POST'
  }).then(response => {
    console.log('Build hook response:', response)
  })

  return {
    statusCode: 200
  }
})

export { handler }