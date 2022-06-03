/**
 * Authorization Roles
 */
const authRoles = {
  super_admin: ["super_admin"],
  admin: ["admin", "super_admin"], 
  hr_manager_and_manager: ['hr_manager', 'manager'],
  super_and_admin_and_manager: ['super_admin', 'admin', 'manager'],
  hr_manager: ["hr_manager", "admin", "super_admin"],
  manager: ["manager", "hr_manager", "admin", "super_admin"],
  user: ["user", "manager", "hr_manager", "admin", "super_admin"],
  onlyUser: ["user"],
  onlyGuest: [],
};

export default authRoles;
