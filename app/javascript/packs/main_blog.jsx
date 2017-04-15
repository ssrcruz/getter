import React from 'react'
import {Editor, EditorState, RichUtils, convertToRaw, convertFromRaw, ContentState} from 'draft-js'

export const MainBlog = ({ match }) => {
  return <h1>{match.params.id}</h1>
}
