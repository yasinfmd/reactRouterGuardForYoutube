import React from "react";

import Anasayfa from "../views/Anasayfa";
import Giris from "../views/Giris";
import Hakkimizda from "../views/Hakkimizda";

export interface RouterModel {
    id: number
    importPath: React.FunctionComponent
    routeProtection: boolean
    path: string
}

export const routeArray: Array<RouterModel> = [
    {
        id: 1,
        importPath: Giris,
        path: '/login',
        routeProtection: false
    },
    {
        id: 3,
        importPath: Hakkimizda,
        path: '/hakkimizda',
        routeProtection: true
    },
    {
        id: 2,
        importPath: Anasayfa,
        path: '/',
        routeProtection: true
    },
]
