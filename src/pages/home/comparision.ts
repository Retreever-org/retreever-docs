export const comparisonData = {
  tools: [
    { id: "swagger", name: "Swagger UI", logo: "/swagger.svg" },
    { id: "springdoc", name: "SpringDoc", logo: "/springdoc.svg" },
    { id: "postman", name: "Postman", logo: "/postman.svg" },
    { id: "retreever", name: "Retreever", logo: "/retreever-icon-box.svg" }
  ],

  features: [
    {
      feature: "Auto-generated API docs",
      swagger: "✔ Yes",
      springdoc: "✔ Yes",
      postman: "✖ No",
      retreever: "✔ Yes"
    },
    {
      feature: "Always up-to-date endpoints",
      swagger: "✔ Yes",
      springdoc: "✔ Yes",
      postman: "✖ Manual collections",
      retreever: "✔ Yes"
    },
    {
      feature: "Type & schema accuracy",
      swagger: "⚠ Basic",
      springdoc: "✔ Good",
      postman: "✖ None",
      retreever: "✔ Strong (generics, records, maps)"
    },
    {
      feature: "Validation & constraint awareness",
      swagger: "⚠ Partial",
      springdoc: "✔ Partial (annotation-based)",
      postman: "✖ Manual only",
      retreever: "✔ Full (reflection + constraints)"
    },
    {
      feature: "Errors",
      swagger: "✖ Manual",
      springdoc: "✖ Manual",
      postman: "N/A",
      retreever: "✔ Auto-discovered by Type"
    },
    {
      feature: "Docs + testing in one place",
      swagger: "✖ Docs only",
      springdoc: "✖ Docs only",
      postman: "✔ Testing only",
      retreever: "✔ Unified"
    },
    {
      feature: "Security-driven testing (auth headers etc.)",
      swagger: "⚠ Requires config/annotations",
      springdoc: "⚠ Requires config/annotations",
      postman: "✔ Yes",
      retreever: "✔ Yes"
    },
    {
      feature: "Header modifications in UI",
      swagger: "⚠ Limited",
      springdoc: "⚠ Limited",
      postman: "✔ Full",
      retreever: "✔ Full"
    },
    {
      feature: "Setup & configuration",
      swagger: "⚠ Heavy annotations",
      springdoc: "⚠ Requires OpenAPI annotations",
      postman: "⚠ Requires collections/envs",
      retreever: "✔ Zero config"
    },
    {
      feature: "External app / network",
      swagger: "✔ In-app",
      springdoc: "✔ In-app",
      postman: "✖ External app / cloud",
      retreever: "✔ In-app"
    },
    {
      feature: "Price",
      swagger: "✔ Free",
      springdoc: "✔ Free",
      postman: "⚠ Free + paid",
      retreever: "✔ Free"
    },
    {
      feature: "Startup overhead",
      swagger: "⚠ Higher",
      springdoc: "⚠ Medium",
      postman: "N/A",
      retreever: "✔ Lightweight (~100ms)"
    },
    {
      feature: "UI & developer experience",
      swagger: "⚠ Outdated",
      springdoc: "⚠ Basic",
      postman: "✔ Polished",
      retreever: "✔ Modern"
    },
    {
      feature: "Onboarding for new devs",
      swagger: "⚠ Needs OpenAPI knowledge",
      springdoc: "⚠ Needs annotation knowledge",
      postman: "✔ Easy (testing only)",
      retreever: "✔ Open app → see everything"
    }
  ]
};
