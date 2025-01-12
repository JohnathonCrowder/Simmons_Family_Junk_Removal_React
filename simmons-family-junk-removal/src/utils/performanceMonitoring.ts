export const monitorPerformance = () => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'layout-shift') {
            console.log('Layout shift detected:', entry);
          }
        }
      });
  
      observer.observe({ entryTypes: ['layout-shift'] });
    }
  };