import type { Config } from '@jest/types'
import { defaults as tsjPreset } from 'ts-jest/presets'
import { pathsToModuleNameMapper } from 'ts-jest/utils'
import ClientConfig from './packages/client/test/tsconfig.json'
import SocketConfig from './packages/socket/test/tsconfig.json'

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  globalSetup: './test/jest.e2e.setup.ts',
  globalTeardown: './test/jest.e2e.teardown.ts',
  projects: [
    {
      rootDir: 'packages/client',
      testMatch: ['<rootDir>/test/e2e/**/(*.)test.ts'],
      displayName: { name: 'Client', color: 'blue' },
      testEnvironment: 'node',
      transform: {
        ...tsjPreset.transform
      },
      globals: {
        'ts-jest': {
          tsconfig: '<rootDir>/test/tsconfig.json'
        }
      },
      clearMocks: true,
      moduleNameMapper: pathsToModuleNameMapper(ClientConfig.compilerOptions.paths, { prefix: '<rootDir>/test/' })
    },
    {
      rootDir: 'packages/socket',
      testMatch: ['<rootDir>/test/e2e/**/(*.)test.ts'],
      displayName: { name: 'Socket', color: 'red' },
      testEnvironment: 'node',
      transform: {
        ...tsjPreset.transform
      },
      globals: {
        'ts-jest': {
          tsconfig: '<rootDir>/test/tsconfig.json'
        }
      },
      clearMocks: true,
      moduleNameMapper: pathsToModuleNameMapper(SocketConfig.compilerOptions.paths, { prefix: '<rootDir>/test/' })
    }
  ]
}

export default config