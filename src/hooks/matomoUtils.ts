export function trackForm(formElement: string) {
  if (window._paq) {
    window._paq.push([
      "FormAnalytics::trackForm",
      document.getElementById(formElement),
    ]);
  }
}
export function trackFormSubmit(formElement: string) {
  if (window._paq) {
    window._paq.push([
      "FormAnalytics::trackFormSubmit",
      document.getElementById(formElement),
    ]);
  }
}
export function trackFormConversion(nodeOrFormName: string, formId?: string) {
  if (window._paq) {
    if (formId)
      window._paq.push([
        "FormAnalytics::trackFormConversion",
        nodeOrFormName,
        formId,
      ]);
    else
      window._paq.push(["FormAnalytics::trackFormConversion", nodeOrFormName]);
  }
}

export function heatmapSessionRecording(enable: boolean) {
  if (window._paq) {
    window._paq.push([
      `HeatmapSessionRecording::${enable ? "enable" : "disable"}`,
    ]);
  }
}
