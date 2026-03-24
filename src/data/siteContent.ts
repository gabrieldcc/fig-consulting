import type { LucideIcon } from 'lucide-react'
import {
  Bot,
  BriefcaseBusiness,
  ChartColumnIncreasing,
  CircleGauge,
  DatabaseZap,
  Gauge,
  Layers3,
  LayoutDashboard,
  MessageSquareMore,
  Radar,
  SearchCheck,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
} from 'lucide-react'

export type NavigationItem = {
  id: string
  label: string
}

export type BadgeItem = {
  label: string
}

export type BenefitItem = {
  title: string
  description: string
}

export type ServiceItem = {
  icon: LucideIcon
  title: string
  description: string
}

export type DifferentiatorItem = {
  icon: LucideIcon
  title: string
  description: string
}

export type MethodologyStep = {
  title: string
  description: string
}

export type MetricItem = {
  value: string
  label: string
}

export type TestimonialItem = {
  quote: string
  name: string
  role: string
  company: string
}

export type FaqItem = {
  question: string
  answer: string
}

export const siteContent = {
  navigation: [
    { id: 'inicio', label: 'Início' },
    { id: 'servicos', label: 'Serviços' },
    { id: 'beneficios', label: 'Benefícios' },
    { id: 'metodologia', label: 'Metodologia' },
    { id: 'cases', label: 'Cases' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contato', label: 'Contato' },
  ] satisfies NavigationItem[],
  badges: [
    { label: 'Business Intelligence' },
    { label: 'Data Analytics' },
    { label: 'Dashboards' },
    { label: 'Estratégia orientada por dados' },
  ] satisfies BadgeItem[],
  benefits: [
    {
      title: 'Clareza para decidir',
      description:
        'Consolidamos indicadores dispersos em uma leitura executiva simples, acionável e confiável.',
    },
    {
      title: 'Redução de ineficiências',
      description:
        'Eliminamos retrabalho analítico e diminuímos o tempo gasto com planilhas e relatórios manuais.',
    },
    {
      title: 'Identificação de oportunidades',
      description:
        'Encontramos padrões de receita, margem e comportamento para revelar novas alavancas de crescimento.',
    },
    {
      title: 'Visão estratégica do negócio',
      description:
        'Traduzimos dados em prioridades gerenciais para acelerar decisões com menos ruído e mais contexto.',
    },
  ] satisfies BenefitItem[],
  services: [
    {
      icon: SearchCheck,
      title: 'Diagnóstico de dados',
      description:
        'Mapeamento de fontes, gargalos e maturidade analítica para definir os próximos passos com segurança.',
    },
    {
      icon: LayoutDashboard,
      title: 'Dashboards e BI',
      description:
        'Painéis executivos e operacionais com leitura intuitiva, foco em decisão e acompanhamento contínuo.',
    },
    {
      icon: CircleGauge,
      title: 'Modelagem de indicadores',
      description:
        'Definição de KPIs, metas e estruturas de acompanhamento alinhadas aos objetivos da empresa.',
    },
    {
      icon: Bot,
      title: 'Automação de relatórios',
      description:
        'Rotinas que conectam bases, reduzem tarefas repetitivas e elevam a confiabilidade das entregas.',
    },
    {
      icon: TrendingUp,
      title: 'Análise de performance',
      description:
        'Leitura analítica de vendas, operações, marketing e finanças para orientar ajustes de rota.',
    },
    {
      icon: DatabaseZap,
      title: 'Cultura data-driven',
      description:
        'Estruturação de rituais, governança e comunicação para tornar os dados parte do dia a dia da gestão.',
    },
  ] satisfies ServiceItem[],
  differentiators: [
    {
      icon: Target,
      title: 'Abordagem personalizada',
      description:
        'Cada projeto nasce do contexto do cliente, sem pacote genérico nem recomendação desconectada da operação.',
    },
    {
      icon: BriefcaseBusiness,
      title: 'Foco em resultado de negócio',
      description:
        'A tecnologia é meio. O objetivo é melhorar margem, produtividade, previsibilidade e velocidade decisória.',
    },
    {
      icon: Radar,
      title: 'Visão analítica e estratégica',
      description:
        'Combinamos profundidade técnica com leitura executiva para transformar dado em direcionamento claro.',
    },
    {
      icon: Layers3,
      title: 'Implantação prática',
      description:
        'Desenhamos soluções que cabem na rotina da equipe e funcionam além da apresentação final.',
    },
    {
      icon: MessageSquareMore,
      title: 'Comunicação com gestores',
      description:
        'Priorizamos uma narrativa simples, objetiva e útil para acelerar alinhamento entre liderança e operação.',
    },
    {
      icon: ShieldCheck,
      title: 'Suporte ponta a ponta',
      description:
        'Acompanhamos do diagnóstico à adoção, garantindo evolução contínua e maior aproveitamento das entregas.',
    },
  ] satisfies DifferentiatorItem[],
  methodology: [
    {
      title: 'Diagnóstico',
      description:
        'Levantamos objetivos, indicadores, bases e principais dores para priorizar o que mais gera impacto.',
    },
    {
      title: 'Estruturação',
      description:
        'Organizamos fontes, regras de negócio, KPIs e arquitetura analítica em um desenho claro e sustentável.',
    },
    {
      title: 'Implementação',
      description:
        'Construímos dashboards, automações e análises com foco em adoção rápida e valor percebido.',
    },
    {
      title: 'Acompanhamento',
      description:
        'Monitoramos resultados, refinamos indicadores e apoiamos a evolução da maturidade orientada por dados.',
    },
  ] satisfies MethodologyStep[],
  metrics: [
    { value: '+120', label: 'projetos orientados por dados' },
    { value: '+35%', label: 'ganho médio em visibilidade gerencial' },
    { value: '+50', label: 'dashboards entregues' },
    { value: '95%', label: 'satisfação em projetos consultivos' },
  ] satisfies MetricItem[],
  testimonials: [
    {
      quote:
        'A FIgConsulting transformou um cenário fragmentado em uma leitura executiva clara. Hoje conseguimos reagir mais rápido e decidir com muito mais segurança.',
      name: 'Mariana Teles',
      role: 'Diretora de Operações',
      company: 'Nexa Varejo',
    },
    {
      quote:
        'Os dashboards trouxeram visibilidade real para a gestão comercial. Reduzimos tempo de consolidação e ganhamos consistência nas reuniões de performance.',
      name: 'Renato Azevedo',
      role: 'Head Comercial',
      company: 'Atlas Industrial',
    },
    {
      quote:
        'O diferencial foi unir profundidade analítica com uma implementação prática. A equipe internalizou os indicadores e a operação ficou muito mais previsível.',
      name: 'Luciana Prado',
      role: 'CFO',
      company: 'Verda Saúde Integrada',
    },
  ] satisfies TestimonialItem[],
  faqs: [
    {
      question: 'O que faz uma consultoria de analytics?',
      answer:
        'Ela organiza dados, estrutura indicadores, cria análises e transforma informação em decisões mais rápidas, precisas e alinhadas ao negócio.',
    },
    {
      question: 'A FIgConsulting atende empresas de quais portes?',
      answer:
        'Atendemos desde operações em fase de estruturação analítica até empresas que já possuem equipes internas e querem acelerar maturidade e execução.',
    },
    {
      question: 'Vocês implementam dashboards?',
      answer:
        'Sim. Desenvolvemos dashboards executivos e operacionais, além de apoiar definição de métricas, arquitetura e adoção pela gestão.',
    },
    {
      question: 'Como funciona o diagnóstico inicial?',
      answer:
        'Começamos entendendo objetivos, fontes de dados, fluxo decisório e gargalos atuais. A partir disso, definimos prioridades e um plano de ação.',
    },
    {
      question: 'Quanto tempo leva um projeto?',
      answer:
        'O prazo varia conforme escopo, volume de dados e complexidade da operação. Projetos mais enxutos podem gerar entregas iniciais em poucas semanas.',
    },
    {
      question: 'É possível contratar por escopo?',
      answer:
        'Sim. Podemos atuar em frentes específicas, como diagnóstico, construção de dashboards, automação ou acompanhamento contínuo.',
    },
  ] satisfies FaqItem[],
  footerLinks: {
    email: 'contato@figconsulting.com.br',
    whatsapp: '+55 (11) 97123-4401',
    linkedin: 'linkedin.com/company/figconsulting',
  },
  heroHighlights: [
    'Diagnóstico preciso da operação',
    'KPIs confiáveis para gestão',
    'Dashboards premium com leitura executiva',
  ],
  authority: [
    {
      icon: Gauge,
      title: 'Consultoria orientada por dados',
      description:
        'Diagnóstico técnico, priorização de alavancas e acompanhamento executivo em uma mesma entrega.',
    },
    {
      icon: Sparkles,
      title: 'Soluções sob medida',
      description:
        'Projetos desenhados para a realidade da empresa, com profundidade analítica e aplicação prática.',
    },
    {
      icon: ChartColumnIncreasing,
      title: 'Foco em conversão e gestão',
      description:
        'Estrutura comercial pensada para fortalecer decisão, visibilidade e geração de valor no negócio.',
    },
  ],
}
