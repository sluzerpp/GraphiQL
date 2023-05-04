declare module './firebase' {
  export const auth: Auth;
  export function signInWithEmailAndPassword(
    auth: Auth,
    email: string,
    password: string
  ): Promise<UserCredential>;
  export function signInWithGoogle(): Promise<UserCredential>;
  export function registerWithEmailAndPassword(
    name: string,
    email: string,
    password: string
  ): Promise<UserCredential>;
  export function sendPasswordResetEmail(auth: Auth, email: string): Promise<unknown>;
  // для вывода всех пользователей внутри - можно сделать запрос к DB
  export function db(
    reference: DocumentReference<DocumentData>,
    firestore: Firestore,
    path: string,
    ...pathSegments: string[]
  ): CollectionReference<DocumentData>;

  //reference: DocumentReference<DocumentData>, path: string, ...pathSegments: string[]): CollectionReference<DocumentData>

  export function logout(): Promise<UserCredential>;
}
export {};
