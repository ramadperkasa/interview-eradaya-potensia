import BaseButton from "./BaseButton";
import BaseContainer from "./BaseContainer.vue";
import BaseDialog from "./BaseDialog.vue";
import BaseDropUpload from "./BaseDropUpload.vue";
import BaseAlert from "./BaseAlert.vue";

const registerComponents = (app) => {
  app.component("BaseButton", BaseButton);
  app.component("BaseContainer", BaseContainer);
  app.component("BaseDialog", BaseDialog);
  app.component("BaseDialog", BaseDialog);
  app.component("BaseDropUpload", BaseDropUpload);
  app.component("BaseDropUpload", BaseDropUpload);
  app.component("BaseAlert", BaseAlert);
};

export default registerComponents;
