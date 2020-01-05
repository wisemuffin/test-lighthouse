/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = `mutation CreateUser(
  $input: CreateUserInput!
  $condition: ModelUserConditionInput
) {
  createUser(input: $input, condition: $condition) {
    id
    commentId
    name
    email
    picture
    createdAt
    updatedAt
    viz {
      id
      vizAuthorId
      title
      content
      image
      componentType
      createdAt
      updatedAt
      vizAuthor {
        id
        commentId
        name
        email
        picture
        createdAt
        updatedAt
      }
      comments {
        nextToken
      }
    }
    comment {
      id
      vizId
      commentAuthorId
      text
      createdAt
      updatedAt
      commentAuthor {
        id
        commentId
        name
        email
        picture
        createdAt
        updatedAt
      }
      viz {
        id
        vizAuthorId
        title
        content
        image
        componentType
        createdAt
        updatedAt
      }
    }
  }
}
`;
export const updateUser = `mutation UpdateUser(
  $input: UpdateUserInput!
  $condition: ModelUserConditionInput
) {
  updateUser(input: $input, condition: $condition) {
    id
    commentId
    name
    email
    picture
    createdAt
    updatedAt
    viz {
      id
      vizAuthorId
      title
      content
      image
      componentType
      createdAt
      updatedAt
      vizAuthor {
        id
        commentId
        name
        email
        picture
        createdAt
        updatedAt
      }
      comments {
        nextToken
      }
    }
    comment {
      id
      vizId
      commentAuthorId
      text
      createdAt
      updatedAt
      commentAuthor {
        id
        commentId
        name
        email
        picture
        createdAt
        updatedAt
      }
      viz {
        id
        vizAuthorId
        title
        content
        image
        componentType
        createdAt
        updatedAt
      }
    }
  }
}
`;
export const deleteUser = `mutation DeleteUser(
  $input: DeleteUserInput!
  $condition: ModelUserConditionInput
) {
  deleteUser(input: $input, condition: $condition) {
    id
    commentId
    name
    email
    picture
    createdAt
    updatedAt
    viz {
      id
      vizAuthorId
      title
      content
      image
      componentType
      createdAt
      updatedAt
      vizAuthor {
        id
        commentId
        name
        email
        picture
        createdAt
        updatedAt
      }
      comments {
        nextToken
      }
    }
    comment {
      id
      vizId
      commentAuthorId
      text
      createdAt
      updatedAt
      commentAuthor {
        id
        commentId
        name
        email
        picture
        createdAt
        updatedAt
      }
      viz {
        id
        vizAuthorId
        title
        content
        image
        componentType
        createdAt
        updatedAt
      }
    }
  }
}
`;
export const createComment = `mutation CreateComment(
  $input: CreateCommentInput!
  $condition: ModelCommentConditionInput
) {
  createComment(input: $input, condition: $condition) {
    id
    vizId
    commentAuthorId
    text
    createdAt
    updatedAt
    commentAuthor {
      id
      commentId
      name
      email
      picture
      createdAt
      updatedAt
      viz {
        id
        vizAuthorId
        title
        content
        image
        componentType
        createdAt
        updatedAt
      }
      comment {
        id
        vizId
        commentAuthorId
        text
        createdAt
        updatedAt
      }
    }
    viz {
      id
      vizAuthorId
      title
      content
      image
      componentType
      createdAt
      updatedAt
      vizAuthor {
        id
        commentId
        name
        email
        picture
        createdAt
        updatedAt
      }
      comments {
        nextToken
      }
    }
  }
}
`;
export const updateComment = `mutation UpdateComment(
  $input: UpdateCommentInput!
  $condition: ModelCommentConditionInput
) {
  updateComment(input: $input, condition: $condition) {
    id
    vizId
    commentAuthorId
    text
    createdAt
    updatedAt
    commentAuthor {
      id
      commentId
      name
      email
      picture
      createdAt
      updatedAt
      viz {
        id
        vizAuthorId
        title
        content
        image
        componentType
        createdAt
        updatedAt
      }
      comment {
        id
        vizId
        commentAuthorId
        text
        createdAt
        updatedAt
      }
    }
    viz {
      id
      vizAuthorId
      title
      content
      image
      componentType
      createdAt
      updatedAt
      vizAuthor {
        id
        commentId
        name
        email
        picture
        createdAt
        updatedAt
      }
      comments {
        nextToken
      }
    }
  }
}
`;
export const deleteComment = `mutation DeleteComment(
  $input: DeleteCommentInput!
  $condition: ModelCommentConditionInput
) {
  deleteComment(input: $input, condition: $condition) {
    id
    vizId
    commentAuthorId
    text
    createdAt
    updatedAt
    commentAuthor {
      id
      commentId
      name
      email
      picture
      createdAt
      updatedAt
      viz {
        id
        vizAuthorId
        title
        content
        image
        componentType
        createdAt
        updatedAt
      }
      comment {
        id
        vizId
        commentAuthorId
        text
        createdAt
        updatedAt
      }
    }
    viz {
      id
      vizAuthorId
      title
      content
      image
      componentType
      createdAt
      updatedAt
      vizAuthor {
        id
        commentId
        name
        email
        picture
        createdAt
        updatedAt
      }
      comments {
        nextToken
      }
    }
  }
}
`;
export const createViz = `mutation CreateViz(
  $input: CreateVizInput!
  $condition: ModelVizConditionInput
) {
  createViz(input: $input, condition: $condition) {
    id
    vizAuthorId
    title
    content
    image
    componentType
    createdAt
    updatedAt
    vizAuthor {
      id
      commentId
      name
      email
      picture
      createdAt
      updatedAt
      viz {
        id
        vizAuthorId
        title
        content
        image
        componentType
        createdAt
        updatedAt
      }
      comment {
        id
        vizId
        commentAuthorId
        text
        createdAt
        updatedAt
      }
    }
    comments {
      items {
        id
        vizId
        commentAuthorId
        text
        createdAt
        updatedAt
      }
      nextToken
    }
  }
}
`;
export const updateViz = `mutation UpdateViz(
  $input: UpdateVizInput!
  $condition: ModelVizConditionInput
) {
  updateViz(input: $input, condition: $condition) {
    id
    vizAuthorId
    title
    content
    image
    componentType
    createdAt
    updatedAt
    vizAuthor {
      id
      commentId
      name
      email
      picture
      createdAt
      updatedAt
      viz {
        id
        vizAuthorId
        title
        content
        image
        componentType
        createdAt
        updatedAt
      }
      comment {
        id
        vizId
        commentAuthorId
        text
        createdAt
        updatedAt
      }
    }
    comments {
      items {
        id
        vizId
        commentAuthorId
        text
        createdAt
        updatedAt
      }
      nextToken
    }
  }
}
`;
export const deleteViz = `mutation DeleteViz(
  $input: DeleteVizInput!
  $condition: ModelVizConditionInput
) {
  deleteViz(input: $input, condition: $condition) {
    id
    vizAuthorId
    title
    content
    image
    componentType
    createdAt
    updatedAt
    vizAuthor {
      id
      commentId
      name
      email
      picture
      createdAt
      updatedAt
      viz {
        id
        vizAuthorId
        title
        content
        image
        componentType
        createdAt
        updatedAt
      }
      comment {
        id
        vizId
        commentAuthorId
        text
        createdAt
        updatedAt
      }
    }
    comments {
      items {
        id
        vizId
        commentAuthorId
        text
        createdAt
        updatedAt
      }
      nextToken
    }
  }
}
`;
