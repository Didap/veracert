<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  ArrowLeft,
  CheckCircle2,
  ShieldCheck,
  HeartPulse,
  TrendingDown,
  Users,
  FileCheck,
  Award,
  Building2,
  HardHat,
  Factory
} from 'lucide-vue-next'

const benefits = [
  {
    icon: HeartPulse,
    title: 'Riduzione Infortuni',
    description: 'Significativa riduzione degli infortuni sul lavoro e miglioramento della sicurezza aziendale.'
  },
  {
    icon: TrendingDown,
    title: 'Sconto Premio INAIL',
    description: 'Accesso a sconti sostanziali sul premio assicurativo INAIL grazie alla certificazione.'
  },
  {
    icon: Users,
    title: 'Motivazione Dipendenti',
    description: 'Maggiore motivazione e soddisfazione dei lavoratori in un ambiente piu sicuro.'
  },
  {
    icon: FileCheck,
    title: 'Conformita Normativa',
    description: 'Migliore conformita alle normative sulla sicurezza e comunicazione con le autorita.'
  },
  {
    icon: Award,
    title: 'Esenzione Responsabilita',
    description: 'Contribuisce all\'esenzione dalla responsabilita civile in caso di incidenti.'
  },
  {
    icon: ShieldCheck,
    title: 'Vantaggio Competitivo',
    description: 'Requisito qualificante per appalti pubblici e privati, riduzione fideiussioni.'
  }
]

const processSteps = [
  {
    step: 1,
    title: 'Definizione dello Scopo Certificabile',
    description: 'Identificazione delle attivita e dei processi da includere nel sistema di gestione.'
  },
  {
    step: 2,
    title: 'Pre-Audit (Opzionale)',
    description: 'Valutazione preliminare per identificare gap nella gestione della sicurezza.'
  },
  {
    step: 3,
    title: 'Audit di Certificazione - Fase 1',
    description: 'Verifica della documentazione e della valutazione dei rischi.'
  },
  {
    step: 4,
    title: 'Audit di Certificazione - Fase 2',
    description: 'Valutazione dell\'implementazione delle misure di prevenzione e protezione.'
  },
  {
    step: 5,
    title: 'Emissione del Certificato',
    description: 'Rilascio del certificato ISO 45001 con validita triennale.'
  },
  {
    step: 6,
    title: 'Audit di Sorveglianza',
    description: 'Verifiche annuali per confermare il mantenimento del sistema.'
  },
  {
    step: 7,
    title: 'Rinnovo della Certificazione',
    description: 'Audit di rinnovo dopo tre anni per confermare la certificazione.'
  }
]

const sectors = [
  'Manifatturiero',
  'Costruzioni',
  'Logistica',
  'Chimico',
  'Energia',
  'Sanita',
  'Servizi',
  'Alimentare'
]
</script>

<template>
  <div class="min-h-screen pt-16">
    <!-- Hero Section -->
    <section class="py-16 bg-gradient-to-br from-orange-500/5 via-background to-secondary/20">
      <div class="container mx-auto px-4">
        <Button variant="ghost" as="a" href="/#servizi" class="mb-6">
          <ArrowLeft class="mr-2 h-4 w-4" />
          Torna ai Servizi
        </Button>

        <div class="max-w-4xl">
          <Badge variant="secondary" class="mb-4 bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-100">
            Certificazione Sistema di Gestione
          </Badge>
          <h1 class="text-4xl md:text-5xl font-bold mb-6">
            ISO 45001
            <span class="text-orange-600 dark:text-orange-400"> Sicurezza sul Lavoro</span>
          </h1>
          <p class="text-xl text-muted-foreground mb-8">
            La certificazione ISO 45001 definisce i requisiti per un sistema di gestione della
            salute e sicurezza dei lavoratori, secondo le normative vigenti e in base ai pericoli
            e rischi presenti sul posto di lavoro.
          </p>
          <div class="flex flex-wrap gap-4">
            <Button size="lg" as="a" href="mailto:veracertsrls@gmail.com?subject=Richiesta%20Informazioni%20ISO%2045001" class="bg-orange-600 hover:bg-orange-700">
              Richiedi Preventivo
            </Button>
            <Button size="lg" variant="outline" as="a" href="#processo">
              Scopri il Processo
            </Button>
          </div>
        </div>
      </div>
    </section>

    <!-- What is ISO 45001 -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge variant="outline" class="mb-4">Cos'e la ISO 45001</Badge>
            <h2 class="text-3xl font-bold mb-6">
              Lo Standard per la Sicurezza dei Lavoratori
            </h2>
            <p class="text-muted-foreground mb-4">
              La norma ISO 45001 e lo standard internazionale che specifica i requisiti per un
              sistema di gestione della salute e sicurezza sul lavoro (SSL). Fornisce un quadro
              per migliorare la sicurezza dei dipendenti e ridurre i rischi sul posto di lavoro.
            </p>
            <p class="text-muted-foreground mb-6">
              Il sistema richiede l'identificazione dei pericoli, la valutazione dei rischi e
              l'implementazione di modalita di controllo conformi alle legislazioni vigenti,
              con l'obiettivo di prevenire infortuni e malattie professionali.
            </p>
            <ul class="space-y-3">
              <li class="flex items-start gap-3">
                <CheckCircle2 class="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                <span>Conforme al D.Lgs. 81/2008 (Testo Unico Sicurezza)</span>
              </li>
              <li class="flex items-start gap-3">
                <CheckCircle2 class="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                <span>Sconto sostanziale sul premio INAIL</span>
              </li>
              <li class="flex items-start gap-3">
                <CheckCircle2 class="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                <span>Contribuisce all'esenzione da responsabilita ex D.Lgs. 231/2001</span>
              </li>
              <li class="flex items-start gap-3">
                <CheckCircle2 class="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                <span>Requisito per appalti pubblici e privati</span>
              </li>
            </ul>
          </div>
          <div class="relative">
            <div class="aspect-square bg-gradient-to-br from-orange-500/20 to-orange-100 dark:to-orange-900/30 rounded-2xl flex items-center justify-center">
              <div class="text-center p-8">
                <HardHat class="w-24 h-24 text-orange-600 mx-auto mb-6" />
                <p class="text-3xl font-bold text-orange-600">ISO 45001:2018</p>
                <p class="text-muted-foreground">Occupational Health & Safety</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Benefits -->
    <section class="py-16 bg-secondary/30">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <Badge variant="outline" class="mb-4">Vantaggi</Badge>
          <h2 class="text-3xl font-bold mb-4">
            I Benefici della Certificazione ISO 45001
          </h2>
          <p class="text-lg text-muted-foreground max-w-2xl mx-auto">
            La certificazione porta benefici concreti per la sicurezza e per l'azienda.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card v-for="benefit in benefits" :key="benefit.title" class="hover:shadow-lg transition-shadow">
            <CardContent class="p-6">
              <div class="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center mb-4">
                <component :is="benefit.icon" class="h-6 w-6 text-orange-600" />
              </div>
              <h3 class="text-lg font-semibold mb-2">{{ benefit.title }}</h3>
              <p class="text-muted-foreground">{{ benefit.description }}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>

    <!-- Certification Process -->
    <section id="processo" class="py-16">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <Badge variant="outline" class="mb-4">Il Percorso</Badge>
          <h2 class="text-3xl font-bold mb-4">
            Il Processo di Certificazione
          </h2>
          <p class="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ti accompagniamo in ogni fase del percorso verso la certificazione ISO 45001.
          </p>
        </div>

        <div class="max-w-4xl mx-auto">
          <div class="space-y-6">
            <div
              v-for="item in processSteps"
              :key="item.step"
              class="flex gap-4 p-6 rounded-xl border bg-card hover:shadow-md transition-shadow"
            >
              <div class="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">
                {{ item.step }}
              </div>
              <div>
                <h3 class="text-lg font-semibold mb-2">{{ item.title }}</h3>
                <p class="text-muted-foreground">{{ item.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Who is it for -->
    <section class="py-16 bg-orange-600 text-white">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center">
          <Badge variant="secondary" class="mb-4">A Chi si Rivolge</Badge>
          <h2 class="text-3xl font-bold mb-6">
            Per Tutte le Organizzazioni
          </h2>
          <p class="text-lg text-white/80 mb-8">
            La ISO 45001 e particolarmente importante per settori ad alto rischio,
            ma e applicabile a qualsiasi organizzazione che voglia garantire
            la sicurezza dei propri lavoratori.
          </p>
          <div class="flex flex-wrap justify-center gap-3">
            <Badge
              v-for="sector in sectors"
              :key="sector"
              variant="secondary"
              class="text-sm px-4 py-2"
            >
              <Factory class="h-4 w-4 mr-2" />
              {{ sector }}
            </Badge>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <Card class="max-w-3xl mx-auto">
          <CardContent class="p-8 text-center">
            <Building2 class="h-12 w-12 text-orange-600 mx-auto mb-4" />
            <h2 class="text-2xl font-bold mb-4">
              Vuoi Certificare la Tua Azienda?
            </h2>
            <p class="text-muted-foreground mb-6">
              Contattaci per una consulenza gratuita. I nostri auditor certificati ti guideranno
              nel percorso verso la certificazione ISO 45001.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" as="a" href="mailto:veracertsrls@gmail.com?subject=Richiesta%20Informazioni%20ISO%2045001" class="bg-orange-600 hover:bg-orange-700">
                Richiedi Informazioni
              </Button>
              <Button size="lg" variant="outline" as="a" href="tel:+393497478611">
                Chiama Ora
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  </div>
</template>
