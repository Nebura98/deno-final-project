import {
  assertEquals,
  assertNotEquals,
} from "https://deno.land/std@0.152.0/testing/asserts.ts";

Deno.test({
  name: "example test",
  ignore: true,
  fn() {
    assertEquals("deno", "deno");
    assertNotEquals(
      {
        runtime: "deno",
      },
      {
        runtime: "node",
      }
    );
  },
});

Deno.test("second example test", () => {
  assertEquals("deno", "deno");
  assertNotEquals(
    {
      runtime: "deno",
    },
    {
      runtime: "node",
    }
  );
});
