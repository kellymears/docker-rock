import {container} from 'tsyringe'

import {readJson, readFile} from 'fs-extra'

interface fs {
  readJson: typeof readJson
  readFile: typeof readFile
}

const fs: fs = {
  readJson,
  readFile,
}

container.register<fs>('fs', {useValue: fs})
