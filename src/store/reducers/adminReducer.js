import { toast } from "react-toastify";

const initState = {
  addSuperAdminError: null,
};

const adminReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_ADMIN_SUCESS":
      toast.success("Supervisor Added", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      return state;
    case "ADD_ADMIN_ERROR":
      toast.error(action.err.message, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      return state;
    case "ADD_SUPER_ADMIN_SUCESS":
      toast.success("Coordinator Added", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      return state;
    case "ADD_SUPER_ADMIN_ERROR":
      toast.error(action.err.message, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      return state;
    case "SUPERVISOR_ROLE":
      return state;
    case "COORDINATOR_ROLE":
      return state;
    default:
      return state;
  }
};

export default adminReducer;
