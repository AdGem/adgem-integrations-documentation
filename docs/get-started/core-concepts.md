---
title: Core Concepts
sidebar_label: Core Concepts
description: The shared vocabulary behind every AdGem integration — properties, offers, goals, conversions, postbacks, and players.
---

# Core Concepts

A quick tour of the terms used across these docs. For a fuller list, see the [Glossary](/docs/resources/glossary).

## App property

Your app or site registered in the AdGem Dashboard. Each property has a unique **App ID** that identifies it in every API call, offerwall embed, and postback. You create one in the [Quickstart](/docs/get-started/quickstart).

## Player

One of your end users. You identify each player to AdGem with a **player ID** of your choosing (your own user ID works well). You supply it when you load the offerwall or when you call the APIs, and AdGem returns it on postbacks so you know who to reward.

## Offer

A rewarded task from an advertiser — for example, install an app, sign up, reach a level, or make a purchase. A player earns a reward by completing the offer. Each offer carries a unique ID, creative details (name, description, icon), targeting, and payout information.

## Goal

A single step within an offer. A **single-reward** offer has one goal — complete it, earn the reward. A **multi-reward** offer has several goals, each with its own reward, so a player earns cumulatively as they progress. You can tell them apart by the `is_multi_reward` field on the offer.

## Completion difficulty

A ranking of how much time and effort an offer takes to complete, from easy to hard (a quick sign-up versus a multi-day gaming milestone). It helps you decide how to surface or prioritize offers. It's returned as the [`completion_difficulty`](/docs/reference/offer-api/schemas/offer) field on each offer.

## Conversion

The moment a player completes an offer (or a goal within one) and becomes eligible for a reward. A conversion is what triggers AdGem to notify you.

## Postback

A server-to-server notification AdGem sends to your endpoint when a conversion happens, so you can grant the player their reward. Postbacks are the recommended, tamper-resistant way to deliver rewards — see [Reward Mechanism](/docs/integrate/reward-mechanism/postbacks-v3). (Pre-built SDKs can alternatively surface rewards through an on-device callback.)

## Reward

The in-app currency or value you grant a player for a conversion. AdGem reports the payout for each conversion; you decide how that maps to your own economy.

## How they fit together

A **player** opens offers tied to your **app property**, completes an **offer** (one or more **goals**), which produces a **conversion**. AdGem sends you a **postback**, and you grant the **reward**.

Ready to choose how to deliver offers? See [Decide your path](/docs/get-started/decide).
