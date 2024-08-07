import { HandPalm, Play } from "phosphor-react"
import { HomeContainer, StartCountdownButton, StopCountdownButton } from "./styles"
import { NewCycleForm } from './components/NewCycleForm'
import { Countdown } from './components/Countdown'
import { FormProvider, useForm } from "react-hook-form"
import { useContext } from "react"
import { CyclesContext } from "../../Contexts/CyclesContext"

interface NewCycleFormData {
  task: string,
  minutesAmount: number
}

function Home() {

  const { createNewCycle, interruptCurrentCycle, activeCycle } = useContext(CyclesContext)

  const newCycleForm = useForm<NewCycleFormData>({
    defaultValues: {
      task: '',
      minutesAmount: 0,
    }
  })

  const { handleSubmit, watch, reset } = newCycleForm

  function handleCreateNewCycle(data: NewCycleFormData) {
    createNewCycle(data)
    reset()
  }

  const task = watch('task')
  const isSubmitDisabled = !task

  return (
  <HomeContainer>
    <form onSubmit={handleSubmit(handleCreateNewCycle)}>
      <FormProvider {...newCycleForm}>
        <NewCycleForm />
      </FormProvider>
      <Countdown />

      {
        activeCycle ? (
          <StopCountdownButton
            onClick={interruptCurrentCycle}
            type="button"
          >
            <HandPalm size={24}/>
            Interromper
          </StopCountdownButton>
        ) : (
          <StartCountdownButton
            type="submit"
            disabled={isSubmitDisabled}
          >
            <Play size={24}/>
            Começar
          </StartCountdownButton>
        )
      }
    </form>
  </HomeContainer>
  )
}

export { Home }
