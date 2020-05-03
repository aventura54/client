import React from "react";
import PropTypes from "prop-types";
import {
  AppBar,
  Container,
  CssBaseline,
  Divider,
  Drawer,
  Hidden,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@material-ui/core";
import SettingsIcon from "@material-ui/icons/Settings";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import ArticleCard from "../../components/ArticleCard/ArticleCard";
import { Link } from "react-router-dom";
import "./FeedPage.scss";

const drawerWidth = 240;
const title = [
  "Ações do governo custarão ao menos R$ 350 bilhões em 2020",
  "Wall Street fecha em queda",
  "Petróleo registra a primeira semana de alta",
  "Governo prepara socorro para empresas que prestam serviços de apoio em aeroportos",
  "Preços do petróleo sobem nesta quinta-feira",
  "Bolsas dos EUA fecham abril com maior ganho em décadas",
];
const description = [
  "Tesouro diz que R$ 60 bilhões já foram gastos com medidas de enfrentamento à crise gerada pelo novo coronavírus. Estimativa é de que dívida pública suba para 90% do PIB.",
  "Wall Street sofreu queda acentuada nesta sexta-feira após o presidente Donald Trump reviver uma ameaça de novas tarifas contra a China em resposta à pandemia do novo coronavírus que freou as economias globais.",
  "Os contratos futuros do petróleo fecharam sem direção única nesta sexta-feira (1º), mas anotaram a primeira semana de ganhos após três perdas semanais consecutivas.",
  "Setor que empregava cerca de 40 mil pessoas antes da crise e presta serviços como manuseio de bagagens e cargas aéreas já registra demissões e atraso em salários.",
  "Os preços do petróleo tiveram novo salto nesta quinta-feira (30), após diversos produtores afirmarem que vão reduzir bombeamento e sinais indicarem que o excesso de oferta nos Estados Unidos não está avançando tão rápido quanto muitos temiam, fatores que levaram um tom otimista ao mercado no final de um dos meses mais voláteis da história da commodity.",
  "Alta foi impulsionada pelas expectativas de que a economia deve começar a se recuperar em breve das severas restrições estabelecidas para conter a pandemia de coronavírus.",
];
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "#695F5F",
    color: "white",
  },
  drawerIcon: {
    color: "white",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function FeedPage(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <List>
        <Link to="/">
          <ListItem button key="logo-item" style={{ justifyContent: "center" }}>
            <img
              className="logo-item"
              src={`${process.env.PUBLIC_URL}/assets/images/logo_white.png`}
            />
          </ListItem>
        </Link>
        <ListItem button disabled key="config-item">
          <ListItemIcon style={{ color: "white" }}>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="Configuração" />
        </ListItem>
        <Link to="/planilha">
          <ListItem button key="minha-conta-item">
            <ListItemIcon style={{ color: "white" }}>
              <AccountCircleIcon />
            </ListItemIcon>
            <ListItemText
              style={{ color: "white", textDecoration: "none" }}
              primary="Minha Conta"
            />
          </ListItem>
        </Link>
      </List>
      <Divider />
      <ListItem key="categorias-item">
        <ListItemText
          disableTypography
          primary={
            <Typography
              type="body2"
              style={{
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Categorias
            </Typography>
          }
        />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Mercado Financeiro" />
      </ListItem>
      <List>
        {[
          "Ações",
          "Renda Fixa",
          "Renda Variavel",
          "Categoria 1",
          "Categoria 2",
          "Categoria 3",
          "Categoria 4",
        ].map((text, index) => (
          <ListItem button disabled key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Mercado Financeiro
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Container>
          {title.map((title, index) => {
            return (
              <ArticleCard
                imgSrc={
                  index % 2 === 0
                    ? `${process.env.PUBLIC_URL}/assets/images/article0.png`
                    : `${process.env.PUBLIC_URL}/assets/images/article2.png`
                }
                articleTitle={title}
                articleText={description[index]}
              />
            );
          })}
        </Container>
      </main>
    </div>
  );
}

FeedPage.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default FeedPage;
