interface ITimestamps {
  dateCreated: number
  dateLastModified: number
}

interface IEditableSolutionProperties {
  name: string
  description?: string
}

interface ISolution extends IEditableSolutionProperties, ITimestamps {
  id: string
  files: string[]
}

interface IEditableFileProperties {
  name: string
  language: string
  content: string
}

interface IFile extends IEditableFileProperties, ITimestamps {
  id: string
}

interface ISampleMetadata {
  id: string
  name: string
  fileName: string
  description: string
  rawUrl: string
  group: string
  api_set: any
}