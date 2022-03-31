import { useEffect, useState } from "react";
import {
  IndexedPermissionsI,
  PermissionI,
  PropsI,
} from "../types/hooks/usePermissions";

export default function usePermissions({
  permissionsSchema,
  level = 0,
  parentPermission,
  permissionsActive,
  initialPermissions = [],
  setPermissions,
  onChange = () => { },
  collpasedIndexed = {},
  handleCollapse
}: PropsI) {
  const [indexedPermissions, setIndexedPermissions] =
    useState<IndexedPermissionsI | null>(null);

  const isExpanded = (idPermissions: string) => {
    const collapsedItems = Object.keys(collpasedIndexed);
    const isCollpased = collapsedItems.includes(`${idPermissions}`);
    return isCollpased;
  }

  const [expandIndexed, setExpandIndexed] = useState<IndexedPermissionsI>({});

  const classNameContainerPermissions = "permissionsElements";

  const [margin, setMargin] = useState(10 * level);

  useEffect(() => {
    if (!indexedPermissions) return;

    permissionsSchema.forEach((permission) => {
      const idCheckbox = (document.getElementById(`${permission.id}`) as HTMLInputElement);

      const isPermissionActive = permissionsActive!.includes(`${permission.id}`);

      if (isPermissionActive) {
        idCheckbox.checked = true
      }
    });
  }, [indexedPermissions]);

  useEffect(() => {
    const indexedParsed = permissionsSchema.reduce(
      (indexed: any, permission: PermissionI) => ({
        ...indexed,
        [`${permission.id}`]: {
          parentPermission,
          isExpanded: true,
          selected: true,
          childrenPermissions:
            permission.items?.map((item: any) => item.id) || [],
        },
      }),
      {}
    );

    setIndexedPermissions(indexedParsed);
    setExpandIndexed(indexedParsed);
  }, []);

  const handleToggle = (
    e: any,
    permission: PermissionI,
    level: number
  ) => {
    const parentPermission =
      indexedPermissions![`${permission.id}`].parentPermission;
    handleChildrenPermissions();
    handleParentPermissions(parentPermission, e.target.checked);
    const checkboxes = getCheckboxes();
    const checkedPermissions = getCheckedPermissions();

    const indexedNewPermissions = generateIndexedNewPermissions();

    const revokedPermissions = getRevokedPermissions();
    const providedPermissions = getProvidedPermissions();

    onChange({
      checkedPermissions: checkedPermissions,
      grantedPermissions: providedPermissions,
      revokedPermissions: revokedPermissions,
    });

    setPermissions({
      granted: providedPermissions,
      revoked: revokedPermissions,
      currentsChecked: checkedPermissions
    });

    /**
     * Handle the toggle value of the checkboxes parent/brothers of the element clicked
     * @param parentPermission - Id of the parent permission of the checked one
     * @param check - New value to set on the checkbox clicked
     * @returns {void}
     */
    function handleParentPermissions(
      parentPermission: string,
      check: boolean
    ): void {
      const parentPermissionDOM: any =
        document.getElementById(parentPermission);

      if (parentPermissionDOM) {
        const isAtLeastOneChecked =
          checkIfAtLeastOneIsChecked(parentPermission);
        parentPermissionDOM.checked = isAtLeastOneChecked;

        return handleParentPermissions(
          parentPermissionDOM.dataset.idparentpermission,
          check
        );
      }

      function checkIfAtLeastOneIsChecked(
        idContainerChildrenPermissions: string
      ): boolean {
        let isAtLeastOneChecked = false;

        const containerPermissions = document.querySelectorAll(
          `#childrenOf-${idContainerChildrenPermissions} input`
        );

        containerPermissions.forEach((inputDOM: any) =>
          inputDOM.checked ? (isAtLeastOneChecked = true) : null
        );

        return isAtLeastOneChecked;
      }
    }

    function handleChildrenPermissions() {
      const containerChildrenName = `childrenOf-${permission.id}`;
      const containerChildrenDOM = document.getElementById(
        containerChildrenName
      );

      if (containerChildrenDOM) {
        const checkboxes: any = document.querySelectorAll(
          `#${containerChildrenName} label input`
        );
        checkboxes.forEach((checkbox: any) => {
          checkbox.checked = e.target.checked;
        });
      }
    }

    /**
     * Get the ids of the permissions checked on the handled toggle click
     * @returns {string[]}
     */
    function getCheckedPermissions() {
      return checkboxes
        .filter((checkbox) => checkbox.checked)
        .map((checkbox) => checkbox.id);
    }

    function getCheckboxes() {
      const checkboxes: HTMLInputElement[] = [];

      document
        .querySelectorAll(`.${classNameContainerPermissions} input`)
        .forEach((checkbox) => checkboxes.push(checkbox as HTMLInputElement));

      return checkboxes;
    }

    /**
     * Generate an indexed object with the new permissions that will be applied.
     *
     * @returns {{ [key: string]: string }}
     */
    function generateIndexedNewPermissions(): { [key: string]: string } {
      return checkedPermissions.reduce(
        (indexed, permission) => ({
          ...indexed,
          [permission]: true,
        }),
        {}
      );
    }

    /**
     * Get the revoked permissions when the user handles the input tree
     * @returns {string[]}
     */
    function getRevokedPermissions(): string[] {
      return initialPermissions.reduce(
        (revokedPermissions: string[], permission: string) => {
          if (indexedNewPermissions[permission] !== undefined) {
            return revokedPermissions;
          } else {
            return [...revokedPermissions, permission];
          }
        },
        []
      );
    }

    /**
     * Get the new provided permissions to that entity on the three schema
     * @returns {string[]}
     */
    function getProvidedPermissions(): string[] {
      return checkedPermissions.reduce((newChecks: string[], permission) => {
        const indexedInitializedPermissions: { [key: string]: boolean } =
          initialPermissions.reduce(
            (indexed, permission) => ({
              ...indexed,
              [permission]: true,
            }),
            {}
          );

        if (indexedInitializedPermissions[permission] === undefined) {
          return [...newChecks, permission];
        } else {
          return newChecks;
        }
      }, []);
    }
  };


  /**
   * Handle the button to expand or collapse the children/parent element
   * @param idPermission - Id of the parent that has the permission
   */
  const handleExpand = (idPermission: string, newValue: boolean) => {
    // setExpandIndexed({
    //   ...expandIndexed,
    //   [idPermission]: {
    //     ...expandIndexed[idPermission],
    //     isExpanded: !expandIndexed[idPermission].isExpanded
    //   }
    // })
  };

  return {
    handleExpand,
    margin,
    indexedPermissions,
    handleToggle,
    expandIndexed,
    classNameContainerPermissions,
    permissionsActive,
    isExpanded
  };
}
