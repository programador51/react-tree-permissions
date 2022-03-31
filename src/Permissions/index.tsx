import React from "react";
import usePermissions from "../hooks/usePermissions";
import { PropsI } from "../types/hooks/usePermissions";

function Permissions({
  permissionsSchema,
  level = 0,
  parentPermission = null,
  permissionsActive = [],
  showExpands = false,
  onChange = () => {},
  initialPermissions = [],
  setPermissions = () => {},
  handleCollapse = () => {},
  collpasedIndexed = {},
}: PropsI) {
  const {
    handleExpand,
    handleToggle,
    margin,
    indexedPermissions,
    expandIndexed,
    classNameContainerPermissions,
    isExpanded,
  } = usePermissions({
    level,
    setPermissions,
    permissionsSchema,
    permissionsActive,
    parentPermission,
    onChange,
    initialPermissions,
    handleCollapse,
    collpasedIndexed,
  });

  return (
    <>
      {!indexedPermissions
        ? null
        : permissionsSchema.map((permission) => {
            const hasChildren =
              expandIndexed[permission.id].childrenPermissions.length > 0
                ? true
                : false;

            return (
              <section
                key={window.crypto.randomUUID()}
                className={classNameContainerPermissions}
              >
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
                    <p
                      className={`toggle  ${
                        !isExpanded(permission.id) ? "upArrow" : ""
                      }`}
                      id={`toggle-${permission.id}`}
                      onClick={(e) =>
                        handleCollapse(permission.id, isExpanded(permission.id))
                      }
                    ></p>
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
                      checked={permissionsActive.includes(`${permission.id}`)}
                      onChange={(e) => handleToggle(e, permission, level)}
                    />
                    <span key={window.crypto.randomUUID()}>
                      {permission.name}
                    </span>
                  </label>
                </div>

                {Object.keys(permission).includes("items") ? (
                  <div
                    style={{
                      display: !isExpanded(permission.id) ? "block" : "none",
                    }}
                    key={window.crypto.randomUUID()}
                    id={`childrenOf-${permission.id}`}
                    data-idparentpermission={
                      indexedPermissions[permission.id].parentPermission
                    }
                  >
                    <Permissions
                      permissionsSchema={permission.items || []}
                      permissionsActive={permissionsActive}
                      initialPermissions={initialPermissions}
                      level={level + 1}
                      key={window.crypto.randomUUID()}
                      parentPermission={permission.id}
                      showExpands={showExpands}
                      setPermissions={setPermissions}
                      onChange={onChange}
                      collpasedIndexed={collpasedIndexed}
                      handleCollapse={handleCollapse}
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
