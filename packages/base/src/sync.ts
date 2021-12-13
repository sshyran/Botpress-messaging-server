import { uuid } from './uuid'

export interface SyncRequest {
  channels?: SyncChannels
  webhooks?: Omit<SyncWebhook, 'token'>[]
  id?: uuid
  token?: string
  name?: string
}

export interface SyncResult {
  id: uuid
  token: string
  webhooks: SyncWebhook[]
}

export interface SyncSandboxRequest {
  name: string
  channels?: SyncChannels
}

export interface SyncChannels {
  [channel: string]: any
}

export interface SyncWebhook {
  url: string
  token?: string
}
