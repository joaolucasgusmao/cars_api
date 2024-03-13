const invalidBodyMessageMock = {
  message: [
    {
      code: "invalid_type",
      expected: "string",
      received: "undefined",
      path: ["name"],
      message: "Required",
    },
    {
      code: "invalid_type",
      expected: "string",
      received: "undefined",
      path: ["brand"],
      message: "Required",
    },
    {
      code: "invalid_type",
      expected: "number",
      received: "undefined",
      path: ["year"],
      message: "Required",
    },
    {
      code: "invalid_type",
      expected: "number",
      received: "undefined",
      path: ["km"],
      message: "Required",
    },
  ],
};

const invalidBodyUpdateMessageMock = {
  message: [
    {
      code: "invalid_type",
      expected: "string",
      received: "number",
      path: ["name"],
      message: "Expected string, received number",
    },
  ],
};

const carNotFoundMessageMock = {
  message: "Car not found.",
};

const invalidBodyUpdateMock = {
  name: 123,
};

export {
  invalidBodyMessageMock,
  carNotFoundMessageMock,
  invalidBodyUpdateMock,
  invalidBodyUpdateMessageMock,
};
