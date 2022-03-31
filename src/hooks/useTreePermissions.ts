import { useState } from "react";
import { setPermissionsI } from "../types/hooks/usePermissions";

export interface StateI {
    initialActive: string[];
    revoked: string[];
    active: string[];
    granted: string[];
    collapsedItems: {
        [key: string]: boolean
    }
}

export default function useTreePermissions(activePermissions: string[] = []) {

    const [permissions, setPermissions] = useState<StateI>({
        initialActive: activePermissions,
        active: activePermissions,
        revoked: [],
        granted: [],
        collapsedItems: {}
    })

    const setPermissionsChecked = ({
        currentsChecked,
        granted,
        revoked,
    }: setPermissionsI): void => setPermissions({
        ...permissions,
        initialActive: permissions.active,
        active: currentsChecked,
        granted,
        revoked,
    });

    const handleCollapse = (id: string, isExpanded: boolean) => {

        if (isExpanded) {
            let unref = { ...permissions.collapsedItems };
            delete unref[id];

            setPermissions({
                ...permissions,
                collapsedItems: unref
            });
        } else {
            setPermissions({
                ...permissions,
                collapsedItems: {
                    ...permissions.collapsedItems,
                    [id]: true
                }
            })
        }
    }

    return { permissions, setPermissionsChecked, handleCollapse };

};
