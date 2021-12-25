import React from 'react'

import {
  AudioPlayerWrapper,
  BlockNameAudio,
  ButtonPlayer,
  NameAudio,
} from './styles'
import { ReactComponent as PrevAudio } from '../../assets/prevAudio.svg'
import { ReactComponent as PauseAudio } from '../../assets/pauseAudio.svg'
import { ReactComponent as NextAudio } from '../../assets/nextAudio.svg'

const AudioPlayer: React.FC = (): JSX.Element => {
  return (
    <>
      <AudioPlayerWrapper>
        <ButtonPlayer>
          <PrevAudio />
        </ButtonPlayer>

        <ButtonPlayer>
          <PauseAudio />
        </ButtonPlayer>

        <ButtonPlayer>
          <NextAudio />
        </ButtonPlayer>

        <BlockNameAudio>
          <NameAudio>The Panhandlers — West Texas In My Eye</NameAudio>
        </BlockNameAudio>
      </AudioPlayerWrapper>
    </>
  )
}

export default AudioPlayer
