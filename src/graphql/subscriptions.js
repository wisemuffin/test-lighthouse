/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCommentWithId = `subscription OnCreateCommentWithId($vizId: ID!) {
  onCreateCommentWithId(vizId: $vizId) {
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
export const onCreateUser = `subscription OnCreateUser {
  onCreateUser {
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
export const onUpdateUser = `subscription OnUpdateUser {
  onUpdateUser {
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
export const onDeleteUser = `subscription OnDeleteUser {
  onDeleteUser {
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
export const onCreateComment = `subscription OnCreateComment {
  onCreateComment {
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
export const onUpdateComment = `subscription OnUpdateComment {
  onUpdateComment {
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
export const onDeleteComment = `subscription OnDeleteComment {
  onDeleteComment {
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
export const onCreateViz = `subscription OnCreateViz {
  onCreateViz {
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
export const onUpdateViz = `subscription OnUpdateViz {
  onUpdateViz {
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
export const onDeleteViz = `subscription OnDeleteViz {
  onDeleteViz {
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
