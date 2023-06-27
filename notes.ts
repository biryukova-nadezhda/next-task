/* export const AppContext = React.createContext<AppStore>({} as AppStore)

export function createStore(config: ConfigStore): AppStore {
  let browserHistory
  if (window.location.origin.includes('real')) {
    browserHistory = createBrowserHistory({basename: '/br'})
  } else {
    browserHistory = createBrowserHistory()
  }
  const routingStore = new RouterStore()
  const history = syncHistoryWithStore(browserHistory, routingStore)
  const http = new HttpStore(config)
  const ws = new WSStore()
  const i18n = new I18nStore(http, config)
  const notifier = new NotifierStore()
  const odds = new OddsStore()
  const user = new UserStore(config, http, history, notifier, ws)
  const mobile = new MobileStore(config, history, user)
  const languages = new LanguagesStore(http, i18n)
  const promo = new PromoStore(http)
  const location = new LocationStore(http)
  const errHandler = new ErrorHandler(config, http, user)
  const transactionsStore = new TransactionsStore(http, notifier)
  const analiticsService = new AnaliticsService(config, user)
  const lotteryPageStore = new LotteryPageStore(http, config, ws, user)
  const dashBoardCasinoStore = new DashboardCasinoStore(http, user)

  return {
    config,
    history,
    http,
    ws,
    i18n,
    mobile,
    notifier,
    odds,
    user,
    languages,
    promo,
    project: config.data.project,
    location,
    errHandler,
    transactionsStore,
    analiticsService,
    lotteryPageStore,
    dashBoardCasinoStore,
  }
}

const { config } = useContext(AppContext)

export const getServerSideProps: GetServerSideProps<{
  repo: Repo
}> = async () => {
  const res = await fetch('https://api.github.com/repos/vercel/next.js')
  const repo = await res.json()
  return { props: { repo } }
}
 
export default function Page({
  repo,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return repo.stargazers_count
}

store.loadAsyncData() */