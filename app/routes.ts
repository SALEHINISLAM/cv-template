import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    //route('cvs', 'routes/cvs.tsx'),
    layout('./layouts/cvs.tsx',[
        route('civil-engineer-cv','./routes/template/civil-engineer-cv.tsx')
    ])
] satisfies RouteConfig;
