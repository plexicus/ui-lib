import Analytics from 'analytics'
import googleTagManager from '@analytics/google-tag-manager'
import { GTMContainerId } from '../constants/Gtm'

export interface analyticsProps {
    containerId?: string
}
export const analytics = ({containerId = GTMContainerId}: analyticsProps) => {
  return Analytics({
  app: 'plexicus-ui',
  plugins: [
    googleTagManager({
      containerId
    })
  ]
})
}