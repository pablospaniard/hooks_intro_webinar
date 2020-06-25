import React from 'react'
import { UnControlled as CodeMirror } from 'react-codemirror2'

import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import '../codeMirrorStyles.css'

const CodeBlock = ({ code, options = {}, style, ...props }) => (
    <div
        style={{
            fontSize: 28,
            overflow: 'scroll',
            textAlign: 'left',
            ...style,
        }}
    >
        <CodeMirror
            value={code}
            options={{
                mode: 'jsx',
                theme: 'material',
                lineNumbers: true,
                readOnly: false,
                ...options,
            }}
            {...props}
        />
    </div>
)

export default CodeBlock
