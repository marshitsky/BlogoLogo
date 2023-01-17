import { FirebaseErrorCode } from "./firebaseErrors";
import { FirebaseErrorMessage } from "./firebaseErrors";
import { getFBErrorMessage } from "./firebaseErrors";
import { validateName } from "./validateForms";
import { validateEmail } from "./validateForms";
import { validatePassword } from "./validateForms";

export type { FirebaseErrorCode, FirebaseErrorMessage };
export { getFBErrorMessage, validateName, validateEmail, validatePassword };
