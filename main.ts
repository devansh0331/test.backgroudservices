// main.ts
// This function will run on the cron schedule
Deno.cron("Background task", "*/5 * * * *", () => {
  console.log("Background task running at:", new Date().toISOString());
  console.log("Hello from Deno Deploy!");

  // You can use Web APIs like fetch directly (no need to npm install)
  // Example:
  // fetch("https://api.example.com/data").then(res => res.json()).then(console.log);
});
