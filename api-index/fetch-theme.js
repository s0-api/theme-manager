async function fetchTheme(MAPTextRef) {
  const MAPRules = {};

  for (const key in MAPTextRef) {
    const TEXTUrl = MAPTextRef[key];

    try {
      const response = await fetch(TEXTUrl);

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      MAPRules[key] = data;
    } catch (error) {
      throw new Error('There was a problem with the fetch operation: ' + error);
    }
  }

  return MAPRules;
}
