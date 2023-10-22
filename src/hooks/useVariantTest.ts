import { useEffect, useState } from "react";

import testsConfigs from "./testConfigs";

const appliedVariants: { name: string; variant: string }[] = [];

const useVariantTest = (testName: string) => {
  const [variant, setVariant] = useState("");

  useEffect(() => {
    const appliedVariant = appliedVariants.find(
      (appliedVariant) => appliedVariant.name === testName
    );
    if (appliedVariant) {
      setVariant(appliedVariant.variant);
    } else {
      const testConfig = getPreparedTestConfig(testName);
      if (testConfig) {
        const _paq = window._paq || [];
        _paq.push(["AbTesting::create", testConfig]);
      }
    }
  }, [testName]);

  const getPreparedTestConfig = (testName: string) => {
    const test = testsConfigs.find((test) => test.name === testName);
    if (test) {
      const enhancedVariations = test.variations.map((variation) => {
        return {
          ...variation,
          activate: (event: any) => {
            appliedVariants.push({ name: testName, variant: variation.name });
            setVariant(variation.name);
            variation.activate(event);
          },
        };
      });

      return {
        ...test,
        variations: enhancedVariations,
      };
    }

    console.warn(
      `Could not find test configuration for given testName: ${testName}`
    );
    return null;
  };

  return variant;
};

export default useVariantTest;
