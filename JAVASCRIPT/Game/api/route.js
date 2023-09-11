export async function POST(request) {
  try {
    const { title, description } = request.json();
    const newPost = await prisma.post.create({
      data: {
        title,
        description,
      },
    });
    return nextResponse.json(newPost);
  } catch (error) {
    return nextResponse.json(
      {
        message: "Failed to create a post",
        error,
      },
      { status: 500 }
    );
  }
}

export async function GET(request) {
  try {
    const posts = await prisma.post.findMany();
    return nextResponse.json(posts);
  } catch (error) {
    return nextResponse.json(
      {
        message: "Failed to Fetch a post",
        error,
      },
      { status: 500 }
    );
  }
}

export async function GET({ params: { id } }) {
  try {
    const posts = await prisma.post.findUnique({
      where: {
        id,
      },
    });
    if (!post) {
      return nextResponse.json(
        {
          message: "No Post fOUND",
        },
        {
          status: 404,
        }
      );
    }
    return nextResponse.json(posts);
  } catch (error) {
    return nextResponse.json(
      {
        message: "Failed to Fetch a post",
        error,
      },
      { status: 500 }
    );
  }
}
export async function PATCH(request, { params: { id } }) {
  try {
    const { title, description } = request.json();
    const updatePost = await prisma.post.update({
      where: {
        id,
      },
      data: {
        title,
        description,
      },
    });
    if (!updatePost) {
      return nextResponse.json(
        {
          message: "Post NOT FOUND ",
        },
        {
          status: 400,
        }
      );
    }
    return nextResponse.json(updatePost);
  } catch (error) {
    return nextResponse.json(
      {
        message: "Failed to uPDATE",
        error,
      },
      { status: 500 }
    );
  }
}

export async function DELETE({ params: { id } }) {
  try {
    await prisma.post.delete({
      where: {
        id,
      },
    });

    return nextResponse.json({
      message: "Deleted Successfully",
    });
  } catch (error) {
    return nextResponse.json(
      {
        message: "Failed to Delete post",
        error,
      },
      { status: 500 }
    );
  }
}
