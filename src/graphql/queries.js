/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const listCommentsByVizd = `query ListCommentsByVizd($vizId: ID!) {
  listCommentsByVizd(vizId: $vizId) {
    items {
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
    nextToken
  }
}
`;
export const getUser = `query GetUser($id: ID!) {
  getUser(id: $id) {
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
export const listUsers = `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getComment = `query GetComment($id: ID!) {
  getComment(id: $id) {
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
export const listComments = `query ListComments(
  $filter: ModelCommentFilterInput
  $limit: Int
  $nextToken: String
) {
  listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getViz = `query GetViz($id: ID!) {
  getViz(id: $id) {
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
export const listVizs = `query ListVizs($filter: ModelVizFilterInput, $limit: Int, $nextToken: String) {
  listVizs(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
        items {
          id
          vizId
          commentAuthor {
            id
            commentId
            name
            email
            picture
          }
          text
          createdAt
          updatedAt
        }
      }
    }
    nextToken
  }
}
`;
