import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),

    layout('./layouts/cvs.tsx',[
        route('civil-engineer-cv','./routes/template/civil-engineer-cv.tsx'),
        route('architectural-project-manager-cv','./routes/template/architectural-project-manager.tsx'),
    ])
] satisfies RouteConfig;
