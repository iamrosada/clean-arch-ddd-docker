import Category from "./category";

describe("Category Unit Tests", () => {
  test("constructor of category", () => {
    const created_at = new Date();
    //Arrange
    const props = {
      name: "Movie",
      description: "some description",
      is_active: true,
      created_at,
    };

    //Act
    const category = new Category(props);

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
    expect(category.props).toStrictEqual({
      name: "Movie",
      description: "some description",
      is_active: true,
      created_at,
    });
  });
});
