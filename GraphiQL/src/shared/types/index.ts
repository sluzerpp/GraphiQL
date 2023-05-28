export interface FullTypeField {
  name: string;
  args: InputValue[];
  type: TypeRef;
  fields: FullTypeField | null;
  description: string;
  isDeprecated: boolean;
  deprecationReason: string | null;
}

export interface FullType {
  kind: string;
  name: string;
  fields: FullTypeField[];
  inputFields: InputValue[];
  interfaces: TypeRef[];
  enumValues: EnumValue[];
  possibleTypes: TypeRef[];
}

export interface InputValue {
  name: string;
  type: TypeRef;
  defaultValue: string | null;
}

export interface TypeRef extends FullType {
  kind: string;
  name: string;
  ofType: TypeRef | null;
}

export interface EnumValue {
  name: string;
  isDeprecated: boolean;
  deprecationReason: string | null;
}

export interface IntrospectionQuery {
  __schema: {
    types: FullType[];
  };
}
