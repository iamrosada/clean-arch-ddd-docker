import Category from "./category";
import { omit } from "lodash";

describe("Category Unit Tests", () => {
  test("constructor of category", () => {
    //Arrange
    // const props = {
    //   name: "Movie",
    //   description: "some description",
    //   is_active: true,
    //   created_at,
    // };

    //Act
    let category = new Category({ name: "Movie" });

    let props = omit(category.props, "created_at");

    //Assert
    // expect(category.props.name).toBe("Movie");
    // expect(category.props.description).toBe("some description");
    // expect(category.props.is_active).toBeTruthy();
    // expect(category.props.created_at).toBe(props.created_at);

    //outra forma tb de fazer o teste seria assim

    // expect(category.props).toMatchObject({
    //   name: "Movie",
    //   description: "some description",
    //   is_active: true,
    //   created_at,
    // });
    // if was added a new variable into project this will check
    expect(props).toStrictEqual({
      name: "Movie",
      description: null,
      is_active: true,
    });

    expect(category.props.created_at).toBeInstanceOf(Date);

    let created_at = new Date();

    category = new Category({
      name: "Movie",
      description: "some description",
      is_active: false,
    });

    expect(category.props).toStrictEqual({
      name: "Movie",
      description: "some description",
      is_active: false,
      created_at,
    });

    category = new Category({
      name: "Movie",
      description: "other description",
    });

    expect(category.props).toMatchObject({
      name: "Movie",
      description: "other description",
    });

    category = new Category({
      name: "Movie",
      is_active: true,
    });

    expect(category.props).toMatchObject({
      name: "Movie",
      is_active: true,
    });

    created_at = new Date();
    category = new Category({
      name: "Movie",
      created_at,
    });

    expect(category.props).toMatchObject({
      name: "Movie",
      created_at,
    });
  });

  test("getter of name field", () => {
    const category = new Category({ name: "Movie" });
    expect(category.name).toBe("Movie");
  });

  test("getter of setter of description field", () => {
    let category = new Category({
      name: "Movie",
    });
    expect(category.description).toBeNull();

    category = new Category({
      name: "Movie",
      description: "some description",
    });
    expect(category.description).toBe("some description");

    category = new Category({
      name: "Movie",
    });

    category["description"] = "other description";
  });
});
