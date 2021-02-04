performance.mark("Start");

for (let i = 0; i < 1000000000; i++) {
  // Do nothing
}

performance.mark("End");

performance.measure("Frontend Masters Chrome Devtools", "Start", "End");

performance.getEntriesByType("measure");
