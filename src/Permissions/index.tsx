import React from "react";
import usePermissions from "../hooks/usePermissions";
import { PropsI } from "../types/hooks/usePermissions";

function Permissions({
  permissions,
  level = 0,
  parentPermission = null,
  permissionsActive = [],
  showExpands = false,
  onChange = () => {},
}: PropsI) {
  const {
    handleExpand,
    handleToggle,
    margin,
    indexedPermissions,
    expandIndexed,
    classNameContainerPermissions,
  } = usePermissions({
    level,
    permissions,
    permissionsActive,
    parentPermission,
    onChange,
  });

  return (
    <>
      {!indexedPermissions
        ? null
        : permissions.map((permission, i: number) => {
            const hasChildren =
              expandIndexed[permission.id].childrenPermissions.length > 0
                ? true
                : false;

            return (
              <section key={window.crypto.randomUUID()} className={classNameContainerPermissions}>
                <div
                  data-idparentpermission={
                    indexedPermissions[permission.id].parentPermission
                  }
                  className="permission"
                  style={{
                    marginLeft: `${margin}px`,
                  }}
                >
                  {hasChildren && showExpands ? (
                    expandIndexed[permission.id].isExpanded ? (
                      <p className="toggle upArrow" id={`toggle-${permission.id}`} onClick={(e) => handleExpand(permission.id)}>
                        
                      </p>
                    ) : (
                      <p className="toggle upArrow" id={`toggle-${permission.id}`} onClick={(e) => handleExpand(permission.id)}>
                        
                      </p>
                    )
                  ) : showExpands ? (
                    <span className="none"></span>
                  ) : null}
                  <label
                    key={window.crypto.randomUUID()}
                    htmlFor={`${permission.id}`}
                    data-idparentpermission={
                      indexedPermissions[permission.id].parentPermission
                    }
                  >
                    <input
                      data-idparentpermission={
                        indexedPermissions[permission.id].parentPermission
                      }
                      type="checkbox"
                      id={`${permission.id}`}
                      name={`${permission.id}`}
                      key={window.crypto.randomUUID()}
                      onChange={(e) => handleToggle(e, permission)}
                    />
                    <span key={window.crypto.randomUUID()}>
                      {permission.name}
                    </span>
                  </label>
                </div>

                {Object.keys(permission).includes("items") ? (
                  <div
                    key={window.crypto.randomUUID()}
                    id={`childrenOf-${permission.id}`}
                    data-idparentpermission={
                      indexedPermissions[permission.id].parentPermission
                    }
                  >
                    <Permissions
                      permissions={permission.items || []}
                      permissionsActive={permissionsActive}
                      level={level + 1}
                      key={window.crypto.randomUUID()}
                      parentPermission={permission.id}
                      showExpands={showExpands}
                      onChange={onChange}
                    />
                  </div>
                ) : null}

              </section>
            );
          })}
    </>
  );
}

export default Permissions;
