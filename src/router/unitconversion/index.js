export default {
  path: "/unitconversion",
  component: () => import("@/views/UnitConversion"),
  children: [
    {
      path: "length",
      component: () => import("@/components/Length")
    },
    {
      path: "area",
      component: () => import("@/components/Area")
    },
    {
      path: "volume",
      component: () => import("@/components/Volume")
    },
    {
      path: "weight",
      component: () => import("@/components/Weight")
    },
    {
      path: "/unitconversion",
      redirect: "/unitconversion/length"
    }
  ]
};
