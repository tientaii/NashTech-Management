const routes = {
    home: { path: '/', name: 'Home' },
    user: { path: '/manageruser', name: 'Manage User' },
    asset: { path: '/manageasset', name: 'Manage Asset' },
    assignment: { path: '/manageassignment', name: 'Manage Assignment' },
    requestForReturning: { path: '/requestforreturning', name: 'Request For Returning' },
    report: { path: '/report', name: 'Report' },
    createUser: { path: '/manageruser/createuser', name: 'Manage User > Create New User' },
    editUser: { path: '/manageruser/edituser', name: 'Manage User > Edit User' },
    createNewAsset: { path: '/manageasset/createnewasset', name: 'Manage Asset > Create New Asset' },
    editAset: { path: '/manageasset/editasset', name: 'Manage Asset > Edit Asset' },
    pageAsset: { path: '/manageasset?p=1' },
    notFound: { path: '*' },
};

export default routes;
